import { Col, Row } from "antd"
import InputLogin from "../Ui/InputLogin"
import { Formik } from "formik";
import { initialValues } from "./Utils";
import CustomCheckbox from "../Ui/checkBox/CustomCheckbox";
import PrimaryButton from "../Ui/Button/PrimaryButton";
import loginImg from '../../assets/images/loginImg.png';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import SocialMediaOptions from "../Components/SocialMediaOptions";


const validationSchema = Yup.object().shape({
  userName: Yup.string().required('Username or email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
      'Password must contain at least one uppercase letter, one number, and one special character'
    ),
});

const Login = () => {
  const navigate = useNavigate();


  const handleSubmit = (values: any) => {
    navigate('/home', { state: values });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Row className="w-full max-w-5xl">
        <Col xs={24} lg={12}>
          <div className="flex items-center justify-center w-full">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
              enableReinitialize
            >
              {({ values, handleSubmit, setFieldValue, errors, touched }) => (
                <form onSubmit={handleSubmit}>
                  <p className="text-[32px] font-[700] text-[#3D3D3D]">Sign In</p>
                  <p className="text-[16px] font-[700] text-[#3D3D3D] leading-[26px]">New user? {"   "} <span className="text-[#587FFF] cursor-pointer">Create an account</span></p>
                  <div className="mt-7">
                    <InputLogin
                      name="userName"
                      value={values?.userName}
                      onChange={(e) => setFieldValue('userName', e.target.value)}
                      placeholder="Username or email"
                      errors={errors}
                      touched={touched}
                    />
                  </div>
                  <div className="mt-4">
                    <InputLogin
                      name="password"
                      value={values?.password}
                      onChange={(e) => setFieldValue('password', e.target.value)}
                      placeholder="Password"
                      type="password"
                      errors={errors}
                      touched={touched}
                    />
                  </div>
                  <div className="mt-4">
                    <CustomCheckbox
                      name="keepMeSignedIn"
                      value={values?.keepMeSignedIn}
                      handleOnChange={(e: boolean) => setFieldValue('keepMeSignedIn', e)}
                      label="Keep me signed in"
                    />
                  </div>
                  <div className="mt-4">
                    <PrimaryButton text="Sign In" type="submit" className="w-[280px]" />
                  </div>
                  <div className="w-[280px] mt-4">
                    <PrimaryButton text="Or Sign In With" signInOptions />
                  </div>
                  <div className="mt-6 w-[280px] flex justify-center">
                    <SocialMediaOptions />
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </Col>
        <Col xs={0} lg={12}>
          <div className="flex items-center justify-center w-full h-full">
            <img src={loginImg} alt="loginImg" />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Login