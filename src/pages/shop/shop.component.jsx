import React from "react";

import SHOP_DATA from './shop.data';

import PreviewCollection from '../../components/preview-collection/preview-collection.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    return (<div className='shop-page'>
    {
      this.state.collections.map(({id, ...otherCollectionProps}) => {
        return (
          <PreviewCollection key={id} {...otherCollectionProps} />
        );
      })
    }
      </div>);
  }
}

export default ShopPage;