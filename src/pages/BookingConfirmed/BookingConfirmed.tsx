import SummaryBlock from "../../components/SummaryBlock/SummaryBlock";

const BookingConfirmed = () => {
    return (
        <div className="bg-[#2E78E5] p-7 leading-[130%]">
            <section className="flex flex-col gap-6">
                <h2 className="text-center text-white text-[26px] font-semibold">Booking confirmed! </h2>
                <p className="text-center text-white text-[20px]">A confirmation email has been sent to your email address</p>
            </section>
            <SummaryBlock
            showDataAndTime={true}
            showInstructor={true}
            showLocation={true}
            showParticipants={true}
            showType={true}
            buttonText="Back to Home"/>
        </div>
    )
}

export default BookingConfirmed;