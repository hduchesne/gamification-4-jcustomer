import React from 'react'; //useEffect,useContext
import PropTypes from "prop-types";

import {Grid, Button, Typography} from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';

import get from "lodash.get";

import {StoreContext} from "contexts";

import 'react-circular-progressbar/dist/styles.css';

import {GET_QUIZ} from "components/Quiz/QuizGraphQL.js";
import Header from "components/Header/Header"
import Quiz from "components/Quiz"
import Qna from "components/Qna";
import Warmup from "components/Warmup";
import Score from "components/Score";
import {syncTracker} from "misc/tracker";
import {makeStyles} from "@material-ui/core/styles";
import classnames from 'clsx';

const useStyles = makeStyles(theme => ({
    main: {
        position: "relative",
        // display:'flex',
        // flexWrap:'wrap',
    },
    inner:{
        // position: 'relative',
        width: '100%',
        // overflow: 'hidden',
        // @include clearfix()
        "&::after": {
            display: 'block',
            clear: 'both',
            content: "",
        }
    }
}));



const initLanguageBundle = quizData => {
    const keys = [
        "btnStart",
        "btnSubmit",
        "btnQuestion",
        "btnNextQuestion",
        "btnShowResults",
        "btnReset",
        "consentTitle",
        "correctAnswer",
        "wrongAnswer"
    ];
    return keys.reduce((bundle,key)=>{
        bundle[key] = get(quizData,`${key}.value`);
        // console.debug("bundle: ",bundle);
        return bundle;
    },{});
}

//NOPE ! TODO jCustomer/context.json -> context. jContext.value = {context,jCustomer}
const App = (props)=> {
    const classes = useStyles(props);

    const { state, dispatch } = React.useContext(StoreContext);
    const {
        jContent,
        quiz,
        showResult,
        showScore
    } = state;

    const {loading, error, data} = useQuery(GET_QUIZ, {
        variables:jContent.gql_variables,
    });

    React.useEffect(() => {
        console.debug("App Quiz init !");
        if(loading === false && data){
            console.debug("App Quiz init Set Data!");

            const quizData = get(data, "response.quiz", {});
            const quizKey = get(quizData, "key.value");

            jContent.language_bundle = initLanguageBundle(quizData);
            console.debug("jContent.language_bundle: ",jContent.language_bundle);

            dispatch({
                case:"DATA_READY",
                payload:{
                    quizData
                }
            });

            //init unomi tracker
            if(jContent.gql_variables.workspace === "LIVE")
                syncTracker({
                    scope: jContent.scope,
                    url: jContent.cdp_endpoint,
                    sessionId:`qZ-${quizKey}-${Date.now()}`,
                    dispatch
                });
        }
    }, [loading,data]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;



    const displayScore=()=>{
        // console.log("[displayScore] showScore: ",showScore);
        if(showScore)
            return <Score/>
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs style={{margin:'auto'}}>
                <div className={classnames(
                    classes.main,
                    (showResult?'showResult':'')
                )}>

                    {quiz &&
                        <>
                    {/*<div className={classes.inner}>*/}
                        <Quiz
                            key={quiz.id}
                        />
                        {quiz.childNodes.map( (node,i) => {
                            if(node.type === jContent.cnd_type.QNA)
                                return <Qna
                                    key={node.id}
                                    id={node.id}
                                />

                            if(node.type === jContent.cnd_type.WARMUP)
                                return <Warmup
                                    key={node.id}
                                    id={node.id}
                                />
                            return <Typography color="error"
                                               component="p">
                                node type {node.type} is not supported
                            </Typography>

                        })
                        }
                        {displayScore()}
                    {/*</div>*/}
                        </>
                    }
                </div>
            </Grid>
        </Grid>
    );
};

App.propTypes={}

export default App;
