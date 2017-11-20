Deployment of XML files here.

1. services.xml
   The file services.xml is used to describe the axis2 service operations.  
   This is the basis for the WSDL file and should match the Java code in the class called out.
   Deploy this file as part of the AAR archive.
   Path in the AAR file is (there may be more files than this):
   $ jar -tvf ApplicantTrackingService.aar
     0 Tue Nov 14 14:15 META-INF/
    69 Tue Nov 14 14:15 META-INF/MANIFEST.MF
   271 Tue Nov 14 14:12 META-INF/services.xml
     0 Tue Nov 14 14:07 com/
     0 Tue Nov 14 14:07 com/acme/
     0 Tue Nov 14 14:07 com/acme/axis2/
     0 Tue Nov 14 14:07 com/acme/axis2/noannotation/
     0 Tue Nov 14 14:07 com/acme/axis2/noannotation/service/
   870 Tue Nov 14 13:36 com/acme/axis2/noannotation/service/ApplicantTrackingService.class

   
2. module.xml
   This is a configuration for axis2 modules.  
   These are cross cutting concerns such as logging.
   Modules are like interceptors/filters in struts and servlets.
   The module.xml file describes them.  There is a logical name/symbol which is inseted into axis2.xml
   [element-><order> attribute-> "phase"] will be referenced in axis2.xml
   i.e.
   <order phase="loggingPhase"> // MATCH BELOW
   ! The file module.xml goes in a ".mar" file like this:
$ jar -tvf ApplicantTrackingService.mar
     0 Sun Nov 19 21:58:24 CST 2017 META-INF/
    69 Sun Nov 19 21:58:24 CST 2017 META-INF/MANIFEST.MF
  1316 Sun Nov 19 18:52:26 CST 2017 META-INF/module.xml
     0 Sun Nov 19 21:53:48 CST 2017 com/
     0 Sun Nov 19 21:53:48 CST 2017 com/acme/
     0 Sun Nov 19 21:58:02 CST 2017 com/acme/axis2/
     0 Sun Nov 19 21:53:48 CST 2017 com/acme/axis2/noannotation/
     0 Sun Nov 19 21:54:04 CST 2017 com/acme/axis2/noannotation/service/
     0 Sun Nov 19 21:53:48 CST 2017 com/acme/axis2/noannotation/service/module/
  1429 Sun Nov 19 18:22:20 CST 2017 com/acme/axis2/noannotation/service/module/LoggingModule.class
  1782 Sun Nov 19 18:33:44 CST 2017 com/acme/axis2/noannotation/service/module/LogHandler.class


3. axis2.xml
   The file axis2.xml is part of the Apache Axis 2 distribution.
   Modifying a file that is part of a distribution is a code smell?
   (I guess we do it with tomcat/conf.. .. so its a "standard" -- mid 2000's style)
   <phase name="loggingPhase">  // MATCH ABOVE
   
   