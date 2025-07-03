import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';

const ErrorText = styled.p`
  color: red;
`;

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const products = ['Mango', 'Banana', 'Watermelon', 'Pineapple'];

const validationSchema = yup.object({
  product: yup.string().required('Please select a product').oneOf(products),
  name: yup.string().required(),
  email: yup.string().email().required(),
  title: yup.string().required(),
  review: yup.string().required(),
  rating: yup.number().required(),
  date: yup.date().default(() => new Date()),
  wouldRecommend: yup.boolean().default(false),
});

const initialValues = {
  name: '',
  email: '',
  title: '',
  review: '',
  rating: '',
  date: new Date(),
  wouldRecommend: false,
  product: '',
};

export class ProductReviewForm extends React.Component {
  handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.handleSubmit}
        validationSchema={validationSchema}
      >
        <Form autoComplete="off">
          <div>
            <label htmlFor="name">Full name</label>
            <div>
              <Field name="name" type="text" placeholder="Full name" />
              <FormError name="name" />
            </div>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <div>
              <Field name="email" type="email" placeholder="Email" />
              <FormError name="email" />
            </div>
          </div>

          <div>
            <label htmlFor="product">Product</label>
            <div>
              <Field name="product" as="select">
              <option value="">Select a product</option>
              {products.map((product, idx) => (
                <option value={product} key={idx}>
                  {product}
                </option>
              ))}
              </Field>
              <FormError name="email" />
            </div>
          </div>

          <div>
            <label htmlFor="title">Title</label>
            <div>
              <Field name="title" type="text" />
              <FormError name="title" />
            </div>
          </div>

          <div>
            <label htmlFor="review">Review</label>
            <div>
              <Field name="review" type="text" placeholder="Review" />
              <FormError name="review" />
            </div>
          </div>

          <div>
            <label htmlFor="rating">Rating</label>
            <div>
              <Field name="rating" type="number" placeholder="Rating" />
              <FormError name="rating" />
            </div>
          </div>

          <div>
            <div>
            <label htmlFor="wouldRecommend">
              <Field name="wouldRecommend" type="checkbox" />
              Would Recommend
              </label>
            </div>
          </div>
          <button type='submit'>Підтвердити</button>

        </Form>
      </Formik>
    );
  }
}
