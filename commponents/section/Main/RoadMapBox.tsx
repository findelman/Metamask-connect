import styled from "styled-components";

const Wrapper = styled.div`
  font-family: var(--ff-BebasN);
  text-align: center;
  h3 {
    letter-spacing: 1px;
    font-weight: 700;
    font-size: 32px;
    line-height: 120%;
  }
`;

const ListWrapper = styled.div`
  margin-top: 42px;
  display: grid;
  gap: 8px;
`;

const ListItemS = styled.div`
  padding-bottom: 8px;
  :not(:last-child) {
    border-bottom: 0.5px solid #d2c4c4;
  }
  span {
    color: var(--color-orange);
    font-weight: 700;
    font-size: 28px;
    line-height: 120%;
    letter-spacing: 1px;
  }
  p {
    margin-top: 12px;
    font-size: 18px;
    line-height: 120%;
  }
`;

const ListItem = ({ num, text }: { num: string; text: string }) => {
  return (
    <ListItemS>
      <span>{num}</span>
      <p>{text}</p>
    </ListItemS>
  );
};

export const RoadMapBox = () => (
  <Wrapper>
    <h3>Roadmap stats</h3>
    <ListWrapper>
      <ListItem num={"12, 345"} text={"Lorem ipsum dolor"} />
      <ListItem num={"12, 345"} text={"Lorem ipsum dolor"} />
      <ListItem num={"12, 345"} text={"Lorem ipsum dolor"} />
    </ListWrapper>
  </Wrapper>
);
