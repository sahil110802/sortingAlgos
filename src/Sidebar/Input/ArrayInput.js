import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setArr } from "../../features/SortSlice";

const ArrayInput = () => {
  const dispatch = useDispatch();
  let { arr, isDisabled } = useSelector((state) => {
    return state.sortVisualizer;
  });
  const [inputArr, setInputArr] = useState("");

  useEffect(() => {
    let tempInputArr = "";
    arr.forEach((element) => {
      tempInputArr += `${element.value},`;
    });
    setInputArr(tempInputArr);
  }, [arr]);

  const inputChangeHandler = (e) => {
    setInputArr(e.target.value);
  };

  const inputChangeBtnHandler = (e) => {
    let tempArr = inputArr.slice(0, inputArr.length).split(",");
    tempArr = tempArr.filter((element) => {
      // console.log(element,Number.isInteger(element),
      // parseInt(element))

      return Number.isInteger(parseInt(element));
    });
    tempArr.map((element, index) => {
      return (tempArr[index] = parseInt(element));
    });
    console.log(tempArr);
    dispatch(setArr(tempArr));
  };
  return (
    <div className="array-input-container">
      <label className="array-input-label" htmlFor="array-input">
        Custom Array
      </label>
      <textarea
        rows="2"
        value={inputArr}
        placeholder="Custom Array"
        id="array-input"
        className="array-input"
        onChange={inputChangeHandler}
      />
      <Button
        disabled={isDisabled}
        style={{ color: "white", border: isDisabled && "1px solid white" }}
        onClick={inputChangeBtnHandler}
        className="input-array-btn"
        variant="contained"
        color="primary"
      >
        Generate
      </Button>
    </div>
  );
};

export default ArrayInput;
