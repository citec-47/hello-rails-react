import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGreeting } from "./redux/greetingSlice/greetingSlice";

function Greeting() {
  const dispatch = useDispatch();
  const { greeting } = useSelector(state => state.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return (
        <h3>{greeting}</h3>
  )
}

export default Greeting;
