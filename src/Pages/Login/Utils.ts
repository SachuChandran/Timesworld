export interface LoginValuesProps {
  userName: string;
  password: string;
  keepMeSignedIn: boolean
}

export const initialValues: LoginValuesProps = {
  userName: '',
  password: '',
  keepMeSignedIn: false
};