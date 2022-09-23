MIGRATION_ISSUES_DETAILS["364778bb-820a-4faf-acad-01e480ede940"] = [
{description: "<p>The Oracle WebLogic Server deployment descriptor file (<code>weblogic.xml<\/code>) provides functionality that is not included in the standard Java EE specification. While there is no direct mapping of these descriptor elements, many of these features may be configured in the application deployment or JBoss server configuration files.<\/p><p>For more information on how to configure JBoss EAP, please refer to the Configuration Guide for JBoss Enterprise Application Platform 7.<\/p>", ruleID: "weblogic-xml-descriptor-eap7-12000", issueName: "WebLogic web application descriptor (weblogic.xml)",
problemSummaryID: "364778bb-820a-4faf-acad-01e480ede940", files: [
{l:"<a class='' href='weblogic_xml.html?project=192736'>WEB-INF/weblogic.xml<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://access.redhat.com/articles/1326803", t:"Migrate Oracle WebLogic configuration files to JBoss EAP"},
{h:"https://access.redhat.com/articles/1327803", t:"Map weblogic.xml configurations to JBoss EAP"},
{h:"https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/7.0/html-single/configuration_guide/", t:"Configuration Guide for JBoss EAP 7"},
]},
];
onProblemSummaryLoaded("364778bb-820a-4faf-acad-01e480ede940");