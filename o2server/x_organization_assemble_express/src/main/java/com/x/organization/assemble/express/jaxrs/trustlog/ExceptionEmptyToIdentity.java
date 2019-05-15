package com.x.organization.assemble.express.jaxrs.trustlog;

import com.x.base.core.project.exception.PromptException;

class ExceptionEmptyToIdentity extends PromptException {

	private static final long serialVersionUID = -665095222445791960L;

	ExceptionEmptyToIdentity() {
		super("被委托人不能为空.");
	}
}
