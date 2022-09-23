MIGRATION_ISSUES_DETAILS["54231ab2-a9c1-4c1c-9268-1eae63eb7755"] = [
{description: "<p>The WebLogic <code>&lt;trans-timeout-seconds&gt;<\/code> configuration element sets the maximum duration for an EJB\'s container-initiated transactions, in seconds, after which the transaction is rolled back. <\/p><p>In JBoss EAP 6+, you can achieve the same behavior by using the <code>TransactionTimeout<\/code> annotation.<\/p>", ruleID: "weblogic-xml-descriptor-19000", issueName: "WebLogic EJB XML (weblogic-ejb-jar.xml) trans-timeout-seconds",
problemSummaryID: "54231ab2-a9c1-4c1c-9268-1eae63eb7755", files: [
{l:"<a class='' href='weblogic_ejb_jar_xml.html?project=192736'>META-INF/weblogic-ejb-jar.xml<\/a>", oc:"2"},
], resourceLinks: [
{h:"https://docs.oracle.com/middleware/1221/wls/WLMDB/summary.htm#r35c1-t4", t:"WebLogic Server Deployment Elements"},
{h:"https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/6.4/html-single/administration_and_configuration_guide/#Session_Bean_Transaction_Timeout", t:"JBoss EAP 6 - Session Bean Transaction Timeout"},
{h:"https://access.redhat.com/solutions/90553", t:"How to set EJB transaction timeout in JBoss EAP 6"},
]},
];
onProblemSummaryLoaded("54231ab2-a9c1-4c1c-9268-1eae63eb7755");