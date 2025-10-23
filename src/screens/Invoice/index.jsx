import React from "react";
import "./style.css";

const Invoice = () => {
  const initialObj = {
    irn: "",
    ackNo: "",
    ackDate: "",
    companyName: "",
    companyAddress: "",
    companyGstin: "",
    companyStateName: "",
    companyStateCode: "",
    companyContact: "",
    companyEmail: "",
    shipToCompanyName: "",
    shipToCompanyAddress: "",
    shipToCompanyGstin: "",
    shipToCompanyStateName: "",
    shipToCompanyStateCode: "",
    shipToCompanyContact: "",
    shipToCompanyEmail: "",
    billToCompanyName: "",
    billToCompanyAddress: "",
    billToCompanyGstin: "",
    billToCompanyStateName: "",
    billToCompanyStateCode: "",
    billToCompanyContact: "",
    billToCompanyEmail: "",
    invoiceNo: "",
    invoiceDate: "",
    deliveryNote: "",
    modeOfPayment: "",
    referenceNo: "",
    referenceDate: "",
    otherRefrences: "",
    buyersOrderNo: "",
    buyersOrderDate: "",
    despatchDocumentNo: "",
    devliveryNoteDate: "",
    despatchedThrough: "",
    dispatchDestination: "",
    billOfLadingNo: "",
    lrrrNo: "",
    motorVehicleNo: "",
    termsOfDelivery: "",
    items: [],
    subTotal: 0,
    totalTaxableValue: 0,
  };
  return (
    <div class="a4-container">
      <div class="w-full text-center font-bold text-xl">Tax Invoice</div>
      <ul>
        <li class="flex items-center gap-2">
          <span class="min-w-18">IRN</span>
          <span>:</span>
          <span>34567890</span>
        </li>
        <li class="flex items-center gap-2">
          <span class="min-w-18">Ack No.</span>
          <span>:</span>
          <span>34567890</span>
        </li>
        <li class="flex items-center gap-2">
          <span class="min-w-18">Ack Date</span>
          <span>:</span>
          <span>34567890</span>
        </li>
      </ul>
    </div>
  );
};

export default Invoice;
