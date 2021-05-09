import React from 'react';
import Input from '../Components/Form/Input';
import { Container, Card, Form, Button } from '../Components/Styles/Styles';
import useFetch from '../Hooks/useFetch';
import { GET_CEP, POST_USER } from '../Services/api';
import useForm from '../Hooks/useForm';

const UserForm = () => {
  const name = useForm();
  const email = useForm();
  const phone = useForm();
  const addressZip = useForm();
  const addressNumber = useForm();
  const addressComplement = useForm();

  const [dataCep, setDataCep] = React.useState(null);
  const [enableSend, setEnableSend] = React.useState(true);
  const [successMessage, setSuccessMessage] = React.useState(false);
  const { loading, error, request } = useFetch();

  async function handleBlur({ target }) {
    const valueCep = target.value.replace('.', '').replace('-', '');
    if (valueCep) {
      const { url, options } = GET_CEP(valueCep);
      const { response, json } = await request(url, options);
      if (response.ok) setDataCep(json);
      setEnableSend(false);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const clearPhone = phone.value
      .replace('(', '')
      .replace(')', '')
      .replace(' ', '')
      .replace('-', '');
    console.log(clearPhone);
    const { url, options } = POST_USER({
      name: name.value,
      email: email.value,
      phone: clearPhone,
      addressZip: addressZip.value,
      addressStreet: event.target.addressStreet.value,
      addressNumber: addressNumber.value,
      addressComplement: addressComplement.value,
      addressDistrict: event.target.addressDistrict.value,
      addressCity: event.target.addressCity.value,
      addressState: event.target.addressState.value,
    });

    const { response } = await request(url, options);
    if (response.ok) {
      setSuccessMessage(true);
    }
  }
  return (
    <>
      <Container>
        {!successMessage ? (
          <>
            <Card>
              <Form onSubmit={handleSubmit}>
                <Input
                  label="Nome"
                  type="text"
                  name="name"
                  {...name}
                  error={
                    error?.filter((item) => item.field === 'name')[0]?.error
                  }
                />
                <Input
                  label="E-mail"
                  type="email"
                  name="email"
                  {...email}
                  error={
                    error?.filter((item) => item.field === 'email')[0]?.error
                  }
                />
                <Input
                  label="Telefone"
                  type="tel"
                  name="phone"
                  {...phone}
                  customMask={['(99) 9999-9999', '(99) 99999-9999']}
                  error={
                    error?.filter((item) => item.field === 'phone')[0]?.error
                  }
                />
                <Input
                  label="CEP"
                  type="text"
                  name="addressZip"
                  {...addressZip}
                  onBlur={handleBlur}
                  customMask="99.999-999"
                  error={
                    error?.filter((item) => item.field === 'addressZip')[0]
                      ?.error
                  }
                />
                {dataCep && (
                  <>
                    <Input
                      label="Logradouro"
                      type="text"
                      name="addressStreet"
                      value={dataCep.logradouro}
                      readOnly={true}
                      error={
                        error?.filter(
                          (item) => item.field === 'addressStreet',
                        )[0]?.error
                      }
                    />
                    <Input
                      label="Número"
                      type="number"
                      name="addressNumber"
                      {...addressNumber}
                      error={
                        error?.filter(
                          (item) => item.field === 'addressNumber',
                        )[0]?.error
                      }
                    />
                    <Input
                      label="Complemento"
                      type="text"
                      name="addressComplement"
                      {...addressComplement}
                      error={
                        error?.filter(
                          (item) => item.field === 'addressComplement',
                        )[0]?.error
                      }
                    />
                    <Input
                      label="Bairro"
                      type="text"
                      name="addressDistrict"
                      value={dataCep.bairro}
                      readOnly={true}
                      error={
                        error?.filter(
                          (item) => item.field === 'addressDistrict',
                        )[0]?.error
                      }
                    />
                    <Input
                      label="Cidade"
                      type="text"
                      name="addressCity"
                      value={dataCep.localidade}
                      readOnly={true}
                      error={
                        error?.filter((item) => item.field === 'addressCity')[0]
                          ?.error
                      }
                    />
                    <Input
                      label="Estado"
                      type="text"
                      name="addressState"
                      value={dataCep.uf}
                      readOnly={true}
                      error={
                        error?.filter(
                          (item) => item.field === 'addressState',
                        )[0]?.error
                      }
                    />
                  </>
                )}

                {loading ? (
                  <Button disabled>Carregando...</Button>
                ) : (
                  <Button disabled={enableSend}>Enviar</Button>
                )}
              </Form>
            </Card>
          </>
        ) : (
          'Muito bom! Você receberá seus adesivos em alguns dias'
        )}
      </Container>
    </>
  );
};

export default UserForm;
