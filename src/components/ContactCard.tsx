import React from "react"

interface ContactProps {
    icon: React.ReactNode;
    h1: string;
    para: string;
}
const ContactCard = (props: ContactProps) => {
    return (
        <>
            <div className="relative mb-32 max-w-sm mx-auto mt-24">
                <div className="rounded-lg overflow-hidden shadow-lg bg-gray-50 h-[220px]">
                    <div className="absolute -mt-16 w-full flex justify-center">
                        <div className="w-[110px] h-[110px]  border-4 border-gray-200 rounded-md bg-[#0A4C7B]">
                            {/* <img
                                src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1715299200&semt=sph"
                                className="rounded-md object-cover h-full w-full shadow-lg"
                                alt="Hamza ali"
                            /> */}
                            {props.icon}
                        </div>
                    </div>
                    <div className="px-6 mt-20">
                        <h1 className="font-semibold text-4xl text-center mb-1 text-blue-600">
                            {props.h1}
                        </h1>
                        <p className="text-gray-700 text-sm text-center italic">
                            {props.para}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactCard