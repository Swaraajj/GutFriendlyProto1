package com.gutfriednly.app.service;

import org.springframework.stereotype.Service;

import com.gutfriednly.app.model.VendorDetails;
import com.gutfriednly.app.repository.VendorRepo;

@Service
public class VendorService {

	final VendorRepo repo;

	VendorService(VendorRepo repo) {
		this.repo = repo;
	}

	public void saveVendor(VendorDetails vendor) {

	    if (vendor.getEmail().isBlank()) {
	        vendor.setEmail(null);
	    }

	    if (vendor.getAadharNo().isBlank()) {
	        vendor.setAadharNo(null);
	    }

	    if (vendor.getPanNo().isBlank()) {
	        vendor.setPanNo(null);
	    }

	    repo.save(vendor);
	}

	public VendorDetails login(String phoneNo, String password) {

		return repo.findByPhoneNoAndPassword(phoneNo, password);
	}

}
