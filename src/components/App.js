import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

//Klucz do WooCommerce Rest API
const consumerKey = "ck_ac452ad50a1b0ab10a0b9e4b0785352868112084";
const consumerSecret = "cs_2eea762334734dc9e6ef756c56e0fec9b66b5f6e";

class App extends Component {
  state = {
    img: "",
    value: "",
    name: "",
    sku: "",
    priceNetto: "",
    priceBrutto: "",
    quantity: "",
    partNumber: "",
    link: "",
    manufacturer: "",
    err: false,
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSkuSubmit = (e) => {
    e.preventDefault();
    const API = `https://automotivexpert.eu/wp-json/wc/v3/products?sku=${this.state.value.toLowerCase()}&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;

    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0 || data.length > 1) {
          throw Error("Nie działa");
        } else {
          const dataSet = data[0];
          const partNumber = dataSet.attributes.filter((data) =>
            data.name === "Numer katalogowy" ? data : null
          );
          const manufacturer = dataSet.attributes.filter((data) =>
            data.name === "Producent" ? data : null
          );
          this.setState((prevState) => ({
            img: dataSet.images[0].src,
            err: false,
            name: dataSet.name,
            sku: dataSet.sku,
            priceNetto: dataSet.price,
            priceBrutto: dataSet.price * 1.23,
            quantity: dataSet.stock_quantity,
            partNumber: partNumber[0].options[0],
            link: dataSet.permalink,
            manufacturer: manufacturer[0].options[0],
          }));
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState((prevState) => ({
          err: true,
          sku: prevState.value,
        }));
      });
  };

  render() {
    return (
      <div className="App">
        <h2>
          <em>{"Version 0.1.0 => *Tylko dokładny numer SKU*"}</em>
        </h2>
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleSkuSubmit}
        />
        <Result data={this.state} />
      </div>
    );
  }
}

export default App;
