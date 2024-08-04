import close from '../../images/cross.webp'

export interface Props {
    label: string,
    isVisible: boolean,
    toggleVisibility(arg0: any) : void,
    children: JSX.Element
}

export default function PopUp(props: Props) {

    return (
        <>
        {props.isVisible &&
            <div className="fixed z-20 left-0 top-0 w-screen h-screen overflow-auto bg-neutral-900 bg-opacity-75">
                <div className="mx-auto inset-0 w-full lg:w-11/12 lg:my-28 lg:p-2 2xl:w-7/12 ">
                    <div className="flex flex-row justify-between bg-light-night border-b border-black-olive p-4 lg:rounded-t-lg w-full">
                        <span className="md:text-lg text-base truncate font-medium  text-ivory tracking-wide ">{props.label}</span>
                        <button className="text-ivory " onClick={props.toggleVisibility}>
                            <img src={close} className="w-5 opacity-40 hover:opacity-100"/>
                        </button>
                    </div>
                    {props.children}
                </div> 
            </div>
        }
        </>
    );
}