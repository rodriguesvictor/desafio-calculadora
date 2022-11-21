import { InpuntContainer } from "./styles";

const Input = ({ value }) => {
    return (
        <InpuntContainer>
            <input disabled value={value} />
        </InpuntContainer>
    );
}

export default Input;