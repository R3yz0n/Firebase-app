
const FormInput = (props) => {
    const changeHandler = (e) => {
        props.setVal(e.target.value)



    }

    return (
        <div className="flex flex-col  py-1 sm:py-2 ">
            <label className="py-2 font-medium  text-[1.1rem] sm:text-lg">{props.label}</label>
            <input type={props.type} className=" py-1 sm:py-2  px-4 font-medium border-2 border-gray-400 rounded-md" value={props.val} onChange={changeHandler} />
        </div>
    )
}

export default FormInput