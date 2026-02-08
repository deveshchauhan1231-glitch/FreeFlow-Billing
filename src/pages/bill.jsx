import { useForm, useFieldArray } from "react-hook-form";
import Header from "../components/common/header";
import Company from "../components/form/company";
import Client from "../components/form/client";
import DocumentPreview from "../components/preview/documentPreview";
import Footer from "../components/common/footer";
import "../styles/pages.css"
function Bill() {
    const { register, control, watch } = useForm({
        defaultValues: {
            company: {
                name: "",
                email: "",
                contact: "",
                address: "",
            },
            client: {
                name: "",
                email: "",
                phone: "",
                address: "",
            },
            items: [{
                name: "",
                price: 0,
                qty: 0
            }],
            tax: [{
                name: "",
                rate: 0,
            }],
        },
    });

    const formData = watch();

    const { fields, append, remove } = useFieldArray({
        control,
        name: "items",
    });

    const {
        fields: taxFields,
        append: appendTax,
        remove: removeTax,
    } = useFieldArray({
        control,
        name: "Tax",
    });

    return (

        <div className="frame">

            <Header />
            <div className="container">
                
                <div className="input">
                    <Company register={register} />
                    <Client register={register} />
                    <form className="items-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="items-header">
                            <span>Item</span>
                            <span>Price</span>
                            <span>Qty</span>
                            <span>Action</span>
                        </div>

                        {fields.map((field, index) => (
                            <div className="item-row" key={field.id}>
                                <input
                                    type="text"
                                    placeholder="Item name"
                                    {...register(`items.${index}.name`)}
                                />

                                <input
                                    type="number"
                                    placeholder="Price"
                                    {...register(`items.${index}.price`, { valueAsNumber: true })}
                                />

                                <input
                                    type="number"
                                    placeholder="Qty"
                                    {...register(`items.${index}.qty`, { valueAsNumber: true })}
                                />

                                <button type="button" onClick={() => remove(index)}>
                                    ✕
                                </button>
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={() => append({ name: "", price: 0, qty: 0 })}
                        >
                            + Add Item
                        </button>
                        <div className="tax-section">
                            <div className="tax-header">
                                <span>Tax Type</span>
                                <span>Rate (%)</span>
                                <span>Action</span>
                            </div>

                            {taxFields.map((field, index) => (
                                <div className="tax-row" key={field.id}>
                                    <input
                                        type="text"
                                        placeholder="GST / VAT / CGST"
                                        {...register(`tax.${index}.name`)}
                                    />

                                    <input
                                        type="number"
                                        placeholder="%"
                                        step="0.01"
                                        {...register(`tax.${index}.rate`, { valueAsNumber: true })}
                                    />

                                    <button type="button" onClick={() => removeTax(index)}>
                                        ✕
                                    </button>
                                </div>
                            ))}

                            <button
                                type="button"
                                onClick={() => appendTax({ name: "", rate: 0 })}
                            >
                                + Add Tax
                            </button>
                        </div>
                        <button className="btn" onClick={() => window.print()}>Print/Save as PDF</button>
                    </form>
                </div>
                <div className="print-area">
                    <DocumentPreview type="bill" data={formData} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Bill;
