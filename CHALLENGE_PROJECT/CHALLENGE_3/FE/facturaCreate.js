class Factura {
    constructor() {
        this.factura = {
            numbering_range_id: 4,
            reference_code: "I3",
            observation: "",
            payment_form: "1",
            payment_due_date: "2024-12-30",
            payment_method_code: "10",
            billing_period: {
                start_date: "2024-01-10",
                start_time: "00:00:00",
                end_date: "2024-02-09",
                end_time: "23:59:59"
            },
            customer: {
                identification: "123456789",
                dv: "3",
                company: "",
                trade_name: "",
                names: "Alan Turing",
                address: "calle 1 # 2-68",
                email: "alanturing@enigmasas.com",
                phone: "1234567890",
                legal_organization_id: "2",
                tribute_id: "21",
                identification_document_id: "3",
                municipality_id: "980"
            },
            items: [
                {
                    "code_reference": "1",
                    "name": "producto de prueba 2",
                    "quantity": 1,
                    "discount_rate": 0,
                    "price": 50000,
                    "tax_rate": "5.00",
                    "unit_measure_id": 70,
                    "standard_code_id": 1,
                    "is_excluded": 0,
                    "tribute_id": 1,
                    "withholding_taxes": []
                },                
                {
                    "code_reference": "2",
                    "name": "producto de prueba 2",
                    "quantity": 1,
                    "discount_rate": 0,
                    "price": 50000,
                    "tax_rate": "5.00",
                    "unit_measure_id": 70,
                    "standard_code_id": 1,
                    "is_excluded": 0,
                    "tribute_id": 1,
                    "withholding_taxes": []
                }
            ]
        };
    }

    documentInfo(rangeId, referenceCode, observation) {
        this.factura.numbering_range_id = Number(rangeId);
        this.factura.reference_code = referenceCode;
        this.factura.observation = observation;
    }

    documentCustomer(identification, dv, names, address, email, phone, identificationId) {
        this.factura.customer.identification = identification;
        this.factura.customer.dv = dv;
        this.factura.customer.names = names;
        this.factura.customer.address = address;
        this.factura.customer.email = email;
        this.factura.customer.phone = phone;
        this.factura.customer.identification_document_id = identificationId;
    }

    documentCompany(company, legalOrganization, tribute, trade_name) {
        this.factura.customer.company = company;
        this.factura.customer.legal_organization_id = legalOrganization;
        this.factura.customer.tribute_id = tribute;
        this.factura.customer.trade_name = trade_name;
    }

    documentMunicipality(municipalityId) {
        this.factura.customer.municipality_id = municipalityId;
    }

    documentPay(paymentForm, paymentMethodCode, payment_due_date) {
        this.factura.payment_form = paymentForm;
        this.factura.payment_method_code = paymentMethodCode;
        this.factura.payment_due_date = payment_due_date;
    }

    documentItems(code, name, quantity, discountRate, price, taxRate, unitMeasure, standardCode, excluded, tributeId) {
        this.factura.items.push({
            code_reference: code,
            name: name,
            quantity: Number(quantity),
            discount_rate: parseFloat(discountRate),
            price: parseFloat(price),
            tax_rate: taxRate,
            unit_measure_id: Number(unitMeasure),
            standard_code_id: Number(standardCode),
            is_excluded: Number(excluded),
            tribute_id: Number(tributeId),
            withholding_taxes: []
        });
    }
    documentBilling(billing_end_date, billing_end_time, billing_start_date, billing_start_time){
        this.factura.billing_period.end_date = billing_end_date;     
        this.factura.billing_period.end_time = billing_end_time;
        this.factura.billing_period.start_date = billing_start_date;
        this.factura.billing_period.start_time = billing_start_time;
    }
    documentCreate() {
        return this.factura;
    }
}

export {Factura};
