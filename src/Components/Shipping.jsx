import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAddress } from "../store/index";

function Shipping(params) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleSubmitContact = (data) => {
        dispatch(addAddress(data));
        navigate("/checkout", { state: { authorized: true } });
    };

    return (
        <div className="flex flex-col w-full lg:py-20 font-pt-sans">
            <div className="flex flex-row w-full text-center pl-10">
                <h1 className="text-primary-2 text-4xl">EXPRESS CHECKOUT</h1>
            </div>

            <form
                className="shipping-container"
                onSubmit={handleSubmit(handleSubmitContact)}
            >
                <h2 className="text-primary-2 text-2xl mb-6">
                    Shipping Address
                </h2>
                <div className="flex flex-col md:flex-row w-full mb-6">
                    <div className="flex flex-col w-full p-2">
                        <label htmlFor="firstName" className="pb-4">
                            First Name
                        </label>
                        <input
                            id="firstName"
                            className={`checkout-input ${
                                errors?.firstName ? "error" : "valid"
                            }`}
                            type="text"
                            {...register("firstName", {
                                required: true,
                                maxLength: 20,
                            })}
                        />
                        {errors.firstName && (
                            <p className="error">
                                Please enter a valid first name.
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col w-full p-2">
                        <label htmlFor="lastName" className="pb-4">
                            Last Name
                        </label>
                        <input
                            id="lastName"
                            className={`checkout-input ${
                                errors?.lastName ? "error" : "valid"
                            }`}
                            type="text"
                            {...register("lastName", {
                                required: true,
                                maxLength: 14,
                            })}
                        />
                        {errors.lastName && (
                            <p className="error">
                                Please enter a valid last name.
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex flex-row w-full mb-6">
                    <div className="flex flex-col w-full p-2">
                        <label htmlFor="email" className="pb-4">
                            Email
                        </label>
                        <input
                            id="email"
                            className={`checkout-input ${
                                errors?.email ? "error" : "valid"
                            }`}
                            type="text"
                            {...register("email", {
                                required: true,
                                pattern:
                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                            autoComplete="off"
                        />
                        {errors.email && (
                            <p className="error">Please enter a valid email.</p>
                        )}
                    </div>
                </div>
                <div className="flex flex-row w-full mb-6">
                    <div className="flex flex-col w-full p-2">
                        <label htmlFor="streetAdd1" className="pb-4">
                            Street Address 1
                        </label>
                        <input
                            id="streetAdd1"
                            className={`checkout-input ${
                                errors?.streetAdd1 ? "error" : "valid"
                            }`}
                            type="text"
                            {...register("streetAdd1", {
                                required: true,
                                maxLength: 50,
                            })}
                        />
                        {errors.streetAdd1 && (
                            <p className="error">
                                Please enter a valid street address
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex flex-row w-full mb-6">
                    <div className="flex flex-col w-full p-2">
                        <label htmlFor="streetAdd2" className="pb-4">
                            Street Address 2
                        </label>
                        <input
                            id="streetAdd2"
                            className={`checkout-input ${
                                errors?.streetAdd2 ? "error" : "valid"
                            }`}
                            type="text"
                            {...register("streetAdd2", {
                                required: true,
                                maxLength: 50,
                            })}
                        />
                        {errors.streetAdd2 && (
                            <p className="error">
                                Please enter a valid street address
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full mb-6">
                    <div className="flex flex-col w-full p-2">
                        <label htmlFor="state" className="pb-4">
                            State/Province
                        </label>
                        <input
                            id="state"
                            className={`checkout-input ${
                                errors?.state ? "error" : "valid"
                            }`}
                            type="text"
                            {...register("state", {
                                required: true,
                                maxLength: 50,
                            })}
                        />
                        {errors.state && (
                            <p className="error">
                                Please enter a valid state or province
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col w-full p-2">
                        <label htmlFor="city" className="pb-4">
                            City
                        </label>
                        <input
                            id="city"
                            className={`checkout-input ${
                                errors?.city ? "error" : "valid"
                            }`}
                            type="text"
                            {...register("city", {
                                required: true,
                                maxLength: 50,
                            })}
                        />
                        {errors.city && (
                            <p className="error">Please enter a valid city</p>
                        )}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full ">
                    <div className="flex flex-col w-full p-2">
                        <label htmlFor="zip" className="pb-4">
                            Zip/Postal Code
                        </label>
                        <input
                            id="zip"
                            className={`checkout-input ${
                                errors?.zip ? "error" : "valid"
                            }`}
                            type="number"
                            {...register("zip", {
                                required: true,
                                maxLength: 5,
                            })}
                        />
                        {errors.zip && (
                            <p className="error">
                                Please enter a valid zipcode.
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col w-full p-2">
                        <label htmlFor="phone" className="pb-4">
                            Phone
                        </label>
                        <input
                            id="phone"
                            className={`checkout-input ${
                                errors?.phone ? "error" : "valid"
                            }`}
                            type="number"
                            {...register("phone", {
                                required: true,
                                maxLength: 50,
                            })}
                            autoComplete="off"
                        />
                        {errors.phone && (
                            <p className="error">Please enter a valid phone.</p>
                        )}
                    </div>
                </div>
                <button className="flex justify-center items-center bg-primary-2 text-white rounded-[8px] border-2 h-12 px-16 mt-10 w-full hover:cursor-pointer">
                    {/* {isSubmitted ? (
                        <ImSpinner3 className="text-2xl animate-spin"></ImSpinner3>
                    ) : (
                        "Checkout"
                    )} */}
                    Submit Address
                </button>
            </form>
        </div>
    );
}

export default Shipping;
