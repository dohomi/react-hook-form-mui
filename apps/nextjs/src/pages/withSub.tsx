import {Button} from "@mui/material";
import {FormContainer, TextFieldElement, useWatch} from "react-hook-form-mui";

const SubComponent = () => {
    const [name, email] = useWatch({
        name: ["name", "email"]
    });
    console.log(name, email);
    return (
        <>
            <Button type={"submit"} color={"primary"} disabled={!(name && email)}>
                Submit
            </Button>
        </>
    );
};

export default function IndexPage() {

    return (
        <div>
            <FormContainer
                defaultValues={{
                    name: ""
                }}
                onSuccess={(data) => {
                    console.log(data)
                }}
            >
                <TextFieldElement name={"name"} label={"Name"} required/> <br/>
                <TextFieldElement
                    name={"email"}
                    label={"Email"}
                    required
                    type={"email"}
                />{" "}
                <br/>
                <TextFieldElement name={"interest"} label={"Interest"}/> <br/>
                <SubComponent/>
            </FormContainer>
        </div>
    );
}
