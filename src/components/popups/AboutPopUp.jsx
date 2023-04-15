import { Button, Box } from "@mui/material";

const AboutPopUp = ({ handleClose }) => {
  return (
    <>
      <div className="popup-box">
        <div className="box">
          <div className="card">
            <div className="card-body">
              <span className="">About Bad Bank</span>
              <hr />
              <div>
                <Box m={2} className="custom-btn-group">
                  <div>
                    <h2>Welcome to Bad Bank</h2>
                    <p>
                      Bad Bank is my project submission for Module 2 in the{" "}
                      <a href="https://executive-ed.xpro.mit.edu/professional-certificate-coding-womens-cohort">
                        MIT - Professional Certificate in Coding - For Women
                      </a>
                      . The project is referred to as "Bad Bank" because it exposers its users' data to
                      the UI.
                      <br /> <br />
                      This project submission consists of a simple React application that demonstrates 
                      concepts such as hooks, context, routing,
                      and form validations. 
                      It also showcases demonstrates the deployment of a React application using AWS S3
                      Buckets.
                      <br /> <br />
                      <div className="features">
                        <div>
                         Technologies and Libraries used within this project:
                          <ul>
                            <li>React JS</li>
                            <li>Formik</li>
                            <li>Yup Schema Validation</li>
                            <li>React Toastify</li>
                            <li>Material UI</li>
                            <li>Bootstrap</li>
                            <li>ChartJS</li>
                          </ul>
                        </div>
                        <div>
                          Functionalities available  within this project:
                          <ul>
                            <li>Create Your Account</li>
                            <li>Login to Your Account</li>
                            <li>Modify Your Account Information</li>
                            <li>Transactions History</li>
                            <li>Make a Deposit</li>
                            <li>Make a Withdrawal</li>
                            <li>Display Totals Chart</li>
                          </ul>
                        </div>
                      </div>
                    </p>
                    <h5>
                      Kristina Rattet <h6>MIT xPro Student</h6>
                    </h5>

                    <h6>
                      <a href="https://github.com/kristina-rattet/badbank.git">
                        Go to My Bad Bank GitHub Repository
                      </a>
                    </h6>
                  </div>
                </Box>

                <Box m={2} className="custom-btn-group">
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPopUp;
