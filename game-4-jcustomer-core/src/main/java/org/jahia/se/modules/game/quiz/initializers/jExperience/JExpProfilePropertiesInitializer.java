package org.jahia.se.modules.game.quiz.initializers.jExperience;

import org.apache.jackrabbit.value.StringValue;
import org.jahia.modules.jexperience.admin.ContextServerService;
import org.jahia.services.content.JCRNodeWrapper;
import org.jahia.services.content.decorator.JCRSiteNode;
import org.jahia.services.content.nodetypes.ExtendedPropertyDefinition;
import org.jahia.services.content.nodetypes.initializers.ChoiceListValue;
import org.jahia.services.content.nodetypes.initializers.ModuleChoiceListInitializer;
import org.json.JSONException;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.RepositoryException;
import java.util.*;

@Component(service = ModuleChoiceListInitializer.class, immediate = true)
public class JExpProfilePropertiesInitializer implements ModuleChoiceListInitializer {
    private static final Logger logger = LoggerFactory.getLogger(JExpProfilePropertiesInitializer.class);

    private String key="jExpProfilePropertiesInitializer";
    private ContextServerService contextServerService;
    private String cardName = "Basic info";

    @Reference(service= ContextServerService.class)
    public void setContextServerService(ContextServerService contextServerService) {
        this.contextServerService = contextServerService;
    }

    @Override
    public List<ChoiceListValue> getChoiceListValues(ExtendedPropertyDefinition epd, String param, List<ChoiceListValue> values, Locale locale, Map<String, Object> context) {
        List<ChoiceListValue> choiceListValues = new ArrayList<>();

        try {
            if (context.containsKey("game4:jExpCard")){
//                cardName = (String) context.get("jExpCard");
                cardName = ((ArrayList<String>) context.get("game4:jExpCard")).get(0);
            }else{
                logger.warn("No jExperience card selected fallback to 'Basic info'");
            }

            JCRNodeWrapper node = (JCRNodeWrapper)
                    ((context.get("contextParent") != null)
                            ? context.get("contextParent")
                            : context.get("contextNode"));

            JCRSiteNode site = node.getResolveSite();
            Utils utils = new Utils(site,contextServerService);
            Map<String,String> propertyNames = utils.getPropertyNames(cardName);
            propertyNames.forEach( (id,name) ->  choiceListValues.add(new ChoiceListValue(name, null, new StringValue(id))));
            Collections.sort(choiceListValues, this.choiceListValueComparator);

        } catch (RepositoryException | JSONException e){
            logger.error("Error happened", e);
        }

        return choiceListValues;
    }
    @Override
    public void setKey(String key) {
        this.key = key;
    }

    @Override
    public String getKey() {
        return key;
    }

    private Comparator<ChoiceListValue> choiceListValueComparator = new Comparator<ChoiceListValue>() {
        @Override
        public int compare(ChoiceListValue l1, ChoiceListValue l2) {
            String displayName1 = l1.getDisplayName().toUpperCase();
            String displayName2 = l2.getDisplayName().toUpperCase();

            //ascending order
            return displayName1.compareTo(displayName2);
        }
    };
}
