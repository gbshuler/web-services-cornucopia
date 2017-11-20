package com.acme.axis2.noannotation.service.module;

//Depends on axis2-kernal-1.7.x.jar
import org.apache.axis2.AxisFault;
import org.apache.axis2.context.ConfigurationContext;
import org.apache.axis2.description.AxisDescription;
import org.apache.axis2.description.AxisModule;
import org.apache.axis2.modules.Module;
//Depends on neethi-3.0.3.jar
import org.apache.neethi.Assertion;
import org.apache.neethi.Policy;

/**
 * https://axis.apache.org/axis2/java/core/docs/modules.html#MyService_with_a_Logging_Module
 * @author brad
 * Since we will not need to "fine tune' module behavior, we usea Dummy implementation
 * Focus on the handler..
 */
public class LoggingModule implements Module {

	@Override
	public void applyPolicy(Policy arg0, AxisDescription arg1) throws AxisFault {
		// TODO Auto-generated method stub
		
	}

	@Override
	public boolean canSupportAssertion(Assertion arg0) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void engageNotify(AxisDescription arg0) throws AxisFault {
		// TODO Auto-generated method stub
		
	}

	@Override
	/**
	 * Initialize the model
	 */
	public void init(ConfigurationContext arg0, AxisModule arg1) throws AxisFault {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void shutdown(ConfigurationContext arg0) throws AxisFault {
		// TODO Auto-generated method stub
		
	}

}
