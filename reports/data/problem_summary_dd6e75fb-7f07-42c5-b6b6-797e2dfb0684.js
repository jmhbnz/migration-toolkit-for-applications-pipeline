MIGRATION_ISSUES_DETAILS["dd6e75fb-7f07-42c5-b6b6-797e2dfb0684"] = [
{description: "<p>If you migrate your application to JBoss EAP 7.3 (or later), and want to ensure its Maven building, running or testing works as expected, use instead the Jakarta EE dependency with groupId <code>com.sun.mail<\/code>, and artifactId <code>jakarta.mail<\/code>.<\/p>", ruleID: "maven-javax-to-jakarta-00001", issueName: "Move to Jakarta EE Maven Artifacts - com.sun.mail:javax.mail",
problemSummaryID: "dd6e75fb-7f07-42c5-b6b6-797e2dfb0684", files: [
{l:"<a class='' href='pom_xml.21.html?project=192736'>META-INF/maven/org.glassfish.main/javaee-api/pom.xml<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/7.3/html-single/migration_guide/index#maven-artifact-changes-for-jakarta-ee_default", t:"Red Hat JBoss EAP 7.3 Migration Guide: Maven Artifact Changes for Jakarta EE"},
]},
];
onProblemSummaryLoaded("dd6e75fb-7f07-42c5-b6b6-797e2dfb0684");