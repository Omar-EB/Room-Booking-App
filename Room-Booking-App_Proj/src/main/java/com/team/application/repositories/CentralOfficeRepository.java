package com.team.application.repositories;

import org.springframework.data.repository.CrudRepository;
import com.team.application.models.CentralOffice;
import com.team.application.models.CentralOfficeCompositeKey;

public interface CentralOfficeRepository extends CrudRepository<CentralOffice, CentralOfficeCompositeKey> {

}
