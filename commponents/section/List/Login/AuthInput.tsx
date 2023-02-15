import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 18px;
  label {
    font-family: var(--ff-BebasN);
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    cursor: pointer;
    line-height: 120%;
    :hover {
      ~ input {
        border: 1px solid var(--color-orange);
      }
    }
  }
  input {
    transition: 300ms linear;
    padding: 12px 120px 12px 18px;
    border: 1px solid #ffffff;
    background: transparent;
    border-radius: 30px;
    color: white;
    :focus {
      border: 1px solid var(--color-orange);
    }
  }
  b {
    color: var(--color-orange);
    font-family: var(--ff-BebasN);
    font-size: 32px;
    line-height: 120%;
  }
`;

interface IAuthInput {
  placeholder?: string;
  text: string;
  onChange?: (e: any) => void;
  name?: string;
  type?: string;
  isLogin: boolean;
  labelText: string;
}

export const AuthInput: React.FC<IAuthInput> = ({
  placeholder,
  text,
  onChange,
  name,
  isLogin,
  type = "text",
  labelText,
}) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{labelText}</label>
      {isLogin ? (
        <b>{text}</b>
      ) : (
        <input
          required
          id={name}
          name={name}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
        />
      )}
    </Wrapper>
  );
};
