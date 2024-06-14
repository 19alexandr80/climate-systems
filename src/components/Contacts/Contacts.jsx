import { Container } from "../stylesheet/Container.styled";

import * as s from "./Contacts.styled";

export default function Contacts() {
  return (
    <>
      <Container>
        <s.ContactsDiv>
          <h1>Кому звонить</h1>
          <p>Конечно ЮЛЕ</p>
        </s.ContactsDiv>
      </Container>
    </>
  );
}
