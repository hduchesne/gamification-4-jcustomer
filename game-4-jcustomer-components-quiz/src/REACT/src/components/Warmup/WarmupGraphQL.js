import {gql} from 'apollo-boost';

export const GET_WARMUP = gql`
    query getWarmup($workspace: Workspace!, $id: String!, $language: String!) {
        response: jcr(workspace: $workspace) {
            warmup: nodeById(uuid: $id) {
                id: uuid
                title:displayName(language:$language)
                subtitle: property(language:$language, name:"game4:subtitle"){
                    value
                }
                content: property(language:$language,name:"game4:content"){
                    value
                }
                duration: property(name:"game4:qnaDuration"){
                    value
                }
                videoLink: property(name:"game4:videoLink"){
                    value
                }
                videoExtPath: property(language:$language,name:"game4:videoExtPath"){
                    value
                }
                videoIntPath: property(language:$language,name:"game4:videoIntPath"){
                    node: refNode {
                        path
                    }
                }
                cover: property(name:"game4:masterQnaCover"){
                    node: refNode {
                        path
                    }
                }
                children{
                    nodes {
                        id: uuid
                        type: primaryNodeType{
                            value:name
                        }
                    }
                }
    
            }
        }
    }
`