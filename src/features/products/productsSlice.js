import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [

    {
      id: 1,
      name: 'iPhone 16 Pro',
      brand: 'Apple',
      image: 'https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_16pro__erw9alves2qa_large_2x.png',
      price: '₹79900.00',
      features: {
        screen: '6.8"',
        battery: '5500mAh',
        camera: '15MP',
      },
    },
    {
      id: 2,
      name: 'iPhone 16',
      brand: 'Apple',
      image: 'https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_16__c5bvots96jee_large_2x.png',
      price: '₹119900.00',
      features: {
        screen: '6.8"',
        battery: '5000mAh',
        camera: '12MP',
      }
    },
    {
      id: 3,
      name: 'iPhone 16e',
      brand: 'Apple',
      image: 'https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_16e__cubm3xoy5qaa_large_2x.png',
      price: '₹59900.00',
      features: {
        screen: '6.8"',
        battery: '6000mAh',
        camera: '52MP',
      },
    },
    {
      id: 4,
      name: 'iPhone 15',
      brand: 'Apple',
      image: 'https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_15__buwagff0mwwi_large_2x.png',
      price: '₹69900.00',
      features: {
        screen: '6.8"',
        battery: '5000mAh',
        camera: '12MP',
      },
    },
    {
      id: 5,
      name: 'Galaxy A56',
      brand: 'Samsung',
      image: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-a566ezkhins/gallery/in-galaxy-a56-5g-sm-a566-sm-a566ezkhins-thumb-545211362?$240_240_PNG$',
      price: '₹44999.00',
      features: {
        screen: '6.1"',
        battery: '4000mAh',
        camera: '32MP',
      },
    },
    {
      id: 6,
      name: 'Galaxy A55 5G',
      brand: 'Samsung',
      image: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-a556elbhins/gallery/in-galaxy-a55-5g-sm-a556-sm-a556elbhins-thumb-540254043?$240_240_PNG$',
      price: '₹44999.00',
      features: {
        screen: '6.5"',
        battery: '4500mAh',
        camera: '48MP',
        memory: '128GB',
      },
    },
    {
      id: 7,
      name: 'Galaxy A36 5G',
      brand: 'Samsung',
      image: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-a366ezknins/gallery/in-galaxy-a36-5g-sm-a366-sm-a366ezknins-thumb-545214448?$240_240_PNG$',
      price: '₹34999.00',
      features: {
        screen: '6.8"',
        battery: '5000mAh',
        camera: '64MP',
        memory: '128GB',
      },
    },
    {
      id: 8,
      name: 'T4 Ultra',
      brand: 'Vivo',
      image: 'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1749462661746/2e6faad2f4554f69302c712dae6f7e35.png',
      price: '₹36999.00',
      features: {
        screen: '6.8"',
        battery: '5000mAh',
        camera: '64MP',
        memory: '256GB',
      },
    },
    {
      id: 9,
      name: 'T4 5G',
      brand: 'Vivo',
      image: 'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1742294454286/53f458c56c2bc87786487e70da430df2.png',
      price: '$₹16999.00',
      features: {
        screen: '5.8"',
        battery: '45000mAh',
        camera: '164MP',
      },
    },
    {
      id: 10,
      name: 'Y39 5G',
      brand: 'Vivo',
      image: 'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1742292688842/45478ef3d84f0b39e5234b5eec9ce347.png',
      price: '$₹18999.00',
      features: {
        screen: '4.8"',
        battery: '6000mAh',
        camera: '120MP',
      },
    },
    {
      id: 11,
      name: 'V50',
      brand: 'Vivo',
      image: 'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1739850054680/c80e59cb3532b0240deb3c10b2576a06.png',
      price: '$₹16999',
      features: {
        screen: '6.8"',
        battery: '5000mAh',
        camera: '64MP',
      },
    },
    {
      id: 12,
      name: 'Y39 5G',
      brand: 'Vivo',
      image: 'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1734060117444/85f7bfef8795b4146fd9ee74e46b692c.png',
      price: '$₹6999',
      features: {
        screen: '4.8"',
        battery: '5000mAh',
        camera: '64MP',
      },
    },
  ],
  compare: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleCompare(state, action) {
      const id = action.payload;
      if (state.compare.includes(id)) {
        state.compare = state.compare.filter(i => i !== id);
      } else if (state.compare.length < 3) {
        state.compare.push(id);
      }
    },
    removeFromCompare(state, action) {
      state.compare = state.compare.filter(i => i !== action.payload);
    },
    clearCompare(state) {
      state.compare = [];
    },
  },
});

export const { toggleCompare, removeFromCompare, clearCompare } = productsSlice.actions;
export default productsSlice.reducer;
