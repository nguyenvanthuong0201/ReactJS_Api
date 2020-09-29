import React, { Component } from "react";
import Cpt_Item from "../../components/com.ProductItem/Cpt_Item";
import Cpt_List from "../../components/com.ProductList/Cpt_List";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import callApi from "../../utils/apiCaller";
import { actDeleteProductRequest, actFetchProduct, actFetchProductRequest } from "../../actions";

class PageProductList extends Component {
  showProduct = (products) => {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <Cpt_Item
            product={product}
            key={index}
            index={index}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return result;
  };
  componentDidMount() {
    // axios({
    //   method:"GET",
    //   url:"https://5f6d6c7660cf97001641adac.mockapi.io/api/products",
    //   data:null,
    // }).then(res=>{
    //     console.log(res);
    //     this.setState({
    //       products:res.data
    //     })
    //   }
    // ).catch(err=>{
    //     console.log(err)
    // });

    // ----------------
    // callApi("products", "GET", null).then((res) => {
    //   this.setState({
    //     products: res.data,
    //   });
    // });
    // ---------------------

    // callApi("products", "GET", null).then((res) => {
    //   this.props.fetchAllProduct(res.data);
    //   // console.log(res.data);
    // });

    this.props.fetchAllProduct();

  }
  onDelete = (id) => {
    // let { products } = this.state;
    // callApi(`products/${id}`, "DELETE", null).then((res) => {
    //   /// gọi Api để xóa sản phẩm nhưng vẫn phải load trang
    //   if (res.status === 200) {
    //     let index = this.findIndex(products, id);
    //     if (index !== -1) {
    //       products.splice(index, 1);
    //       this.setState({
    //         products: products,
    //       });
    //     }
    //   }
    // });
    this.props.onDeleteProduct(id)
  };


  // findIndex = (products, id) => {
  //   let result = -1;
  //   products.forEach((product, index) => {
  //     if (product.id === id) {
  //       result = index;
  //     }
  //   });
  //   return result;
  // };

  render() {
    // let { products } = this.state;
    let {products} = this.props;
    return (
      <div className="table-responsive">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Link
            to="/product/add"
            className="btn btn-outline-primary buttonAddProduct"
          >
            Thêm sản phẩm
          </Link>
          <h3>Danh sách sản phẩm</h3>
        </div>
        <hr />
        <Cpt_List>{this.showProduct(products)}</Cpt_List>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProduct: () => {
      dispatch(actFetchProductRequest());
    },
    onDeleteProduct: (id) =>{
      dispatch(actDeleteProductRequest(id))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageProductList);
