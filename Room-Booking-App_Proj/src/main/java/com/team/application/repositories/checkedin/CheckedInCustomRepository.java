package com.team.application.repositories.checkedin;

import java.util.List;

import com.team.application.models.CheckedIn;

public interface CheckedInCustomRepository {
	public List<CheckedIn> findAllCheckIns();
}
