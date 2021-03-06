import React, { Component } from 'react';
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getInvoice, deleteInvoice } from './Data'



export default function Invoice() {
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10))
    let navigate = useNavigate();
    let location = useLocation();

    return (
        <div style={{ padding: "1rem" }}>
            <h2>Total Amount Due: {invoice.amount}</h2>
            <p>{invoice.name} - {invoice.number}</p>
            <p>Due Date: {invoice.due}</p>

            <p>
                <button
                    onClick={() => {
                        deleteInvoice(invoice.number);
                        navigate("/invoices" + location.search);
                    }}
                >
                    Delete
                </button>
            </p>

        </div>
    )
}
