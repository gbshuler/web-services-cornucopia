package com.acme.axis2.noannotation.service.module;

import org.apache.axis2.AxisFault;
import org.apache.axis2.context.MessageContext;
import org.apache.axis2.engine.Handler;
import org.apache.axis2.handlers.AbstractHandler;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class LogHandler extends AbstractHandler implements Handler{
    private static final Log log = LogFactory.getLog(LogHandler.class);
    private String name;

    public String getName() {
        return name;
    }

    /**
     * https://axis.apache.org/axis2/java/core/docs/modules.html#MyService_with_a_Logging_Module
     * For the logging module, we will write a handler with the following methods.
     * This method that is called by the Axis2 engine when the control is passed to the handler
     */
    public InvocationResponse invoke(MessageContext msgContext) throws AxisFault {
        log.info(msgContext.getEnvelope().toString());
        return InvocationResponse.CONTINUE;        
    }

    /**
     * https://axis.apache.org/axis2/java/core/docs/modules.html#MyService_with_a_Logging_Module
     * For the logging module, we will write a handler with the following methods.
     * This method that is called when the handlers are revoked by the Axis2 engine.
     */
    public void revoke(MessageContext msgContext) {
        log.info(msgContext.getEnvelope().toString());
    }

    public void setName(String name) {
        this.name = name;
    }
}
