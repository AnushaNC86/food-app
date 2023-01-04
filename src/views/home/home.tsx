import HomeThree from "../../components/homeThree/homeThree";
import "./home.css";
import HomeTwo from "../../components/homeTwo/homeTwo";
import HomeFive from '../../components/homeFive/homeFive';
import HomeFour from '../../components/homeFour/homeFour';
import HomeOne from "../../components/homeOne/homeOne";
import { Modal } from "@mui/material";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/modalSlice";

const Home = () => {
    const dispatch = useDispatch();
    //modal styling
    // const style: any = {
    //     position: "absolute",
    //     top: "50%",
    //     left: "50%",
    //     transform: "translate(-50%, -50%)",
    //     width: "50%",
    //     minWidth: 700,
    //     height: 580,
    //     border: "none",
    //     outline: "none",
    //     p: 4,
    // };

    let showModal: any = useSelector((state: any) => state.modalStatus.value);
    console.log(showModal);

    // const [open, setOpen] = useState(showModal);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => {
        dispatch(closeModal());
    }
    return (
        <>
            <div className='homeContainer'>
                <HomeOne />
                <HomeTwo />
                <HomeThree />
                <HomeFour />
                <HomeFive />
            </div>
            <Modal
                open={showModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="modalDiv style">
                    <div className="leftSide">
                        <img src={require("../../assets/Image.png")} alt="" className="bgForModalLeftSide" />
                        <div className="contentDiv">
                            <span className="contentDivHeading">LOREM</span>
                            <span className="contentDivSubHeading">
                                Experience the
                                easiest a way to get
                                <span className="boldify"> great food</span>   Delivered
                            </span>
                        </div>
                    </div>
                    <div className="rightSide">

                    </div>
                </div>
            </Modal>
        </>
    );
}
export default Home
