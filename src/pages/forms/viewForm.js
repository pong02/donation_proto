import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Form0 from "./formComponents/sampleDonation0";
import Form1 from "./formComponents/sampleDonation1";

function ViewForm() {
  const { state } = useLocation();
  const navigate = useNavigate();
  switch (state.id) {
    case "1":
      return (
        <div>
          <Form1></Form1>
        </div>
      );
    case "0":
      return (
        <div>
          <Form0></Form0>
        </div>
      );
    default:
      return (
        <div>
          <h1>NO SUCH FORM</h1>
        </div>
      );
  }
  return (
    <div>
      <h1>THIS IS FORM {state.id}</h1>
    </div>
  );
}

export default ViewForm;
