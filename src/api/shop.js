/**
 * Mocking client-server processing
 */
const _products = [
  {
    'id': 1,
    'image': 'https://media.sweetwater.com/images/items/120/SM57-medium.jpg',
    'url': 'https://www.sweetwater.com/store/detail/SM57',
    'manufacturer': 'Shure',
    'productName': 'Sm57',
    'itemid': 'SM57',
    'quantity': 1,
    'price': 99.00,
    'description': 'Dynamic Microphone with Cardioid Pickup Pattern, 40Hz-15kHz Frequency Response, Low Impedance, Includes Stand Adapter, and Zippered Carrying Case',
    'available': 9
  },
  {
    'id': 2,
    'image': 'https://media.sweetwater.com/images/items/120/SM58-medium.jpg',
    'url': 'https://www.sweetwater.com/store/detail/SGS17HCCH/sn170099523',
    'manufacturer': 'Gibson',
    'productName': 'SG Standard 2017 T - Heritage Cherry',
    'itemid': 'SGS17HCCH',
    'quantity': 1,
    'price': 1169.00,
    'serial': 170099523,
    'description': 'Solidbody Electric Guitar with Mahogany Body, Mahogany Neck, Rosewood Fingerboard, and 2 Humbucking Pickups - Heritage Cherry',
    'available': 1
  },
  {
    'id': 3,
    'image': 'https://media.sweetwater.com/images/items/120/SM58-medium.jpg',
    'url': 'https://www.sweetwater.com/store/detail/SM58',
    'manufacturer': 'Shure',
    'productName': 'SM58',
    'itemid': 'SM58',
    'quantity': 3,
    'price': 99.00,
    'description': 'Dynamic Vocal Microphone with Cardioid Pickup Pattern and 50Hz-15kHz Frequency Response, Includes Stand Adapter, and Zippered Carrying Case',
    'available': 6
  },
  {
    'id': 4,
    'image': 'https://media.sweetwater.com/images/items/120/R16-medium.jpg',
    'url': 'https://www.sweetwater.com/store/detail/R16',
    'manufacturer': 'Zoom',
    'productName': 'R16',
    'itemid': 'R16',
    'quantity': 1,
    'price': 399.99,
    'description': '16-track Portable SD Recorder, USB Audio Interface, and DAW Control Surface with 8 Microphone Inputs, Built-in Stereo Condenser Microphones, Built-in Effects, 1GB SD Card, and USB - Mac/PC',
    'available': 14
  },
  {
    'id': 5,
    'image': 'https://media.sweetwater.com/images/items/120/R16-medium.jpg',
    'url': 'https://www.sweetwater.com/store/detail/R16',
    'manufacturer': 'Zoom',
    'productName': 'R16',
    'itemid': 'R16',
    'quantity': 1,
    'price': 399.99,
    'description': '16-track Portable SD Recorder, USB Audio Interface, and DAW Control Surface with 8 Microphone Inputs, Built-in Stereo Condenser Microphones, Built-in Effects, 1GB SD Card, and USB - Mac/PC',
    'available': 14
  },
  {
    'id': 6,
    'image': 'https://media.sweetwater.com/images/items/120/R16-medium.jpg',
    'url': 'https://www.sweetwater.com/store/detail/R16',
    'manufacturer': 'Zoom',
    'productName': 'R16',
    'itemid': 'R16',
    'quantity': 1,
    'price': 399.99,
    'description': '16-track Portable SD Recorder, USB Audio Interface, and DAW Control Surface with 8 Microphone Inputs, Built-in Stereo Condenser Microphones, Built-in Effects, 1GB SD Card, and USB - Mac/PC',
    'available': 14
  },
  {
    'id': 7,
    'image': 'https://media.sweetwater.com/images/items/120/R16-medium.jpg',
    'url': 'https://www.sweetwater.com/store/detail/R16',
    'manufacturer': 'Zoom',
    'productName': 'R16',
    'itemid': 'R16',
    'quantity': 1,
    'price': 399.99,
    'description': '16-track Portable SD Recorder, USB Audio Interface, and DAW Control Surface with 8 Microphone Inputs, Built-in Stereo Condenser Microphones, Built-in Effects, 1GB SD Card, and USB - Mac/PC',
    'available': 14
  },
  {
    'id': 8,
    'image': 'https://media.sweetwater.com/images/items/120/R16-medium.jpg',
    'url': 'https://www.sweetwater.com/store/detail/R16',
    'manufacturer': 'Zoom',
    'productName': 'R16',
    'itemid': 'R16',
    'quantity': 1,
    'price': 399.99,
    'description': '16-track Portable SD Recorder, USB Audio Interface, and DAW Control Surface with 8 Microphone Inputs, Built-in Stereo Condenser Microphones, Built-in Effects, 1GB SD Card, and USB - Mac/PC',
    'available': 14
  }
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },
  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
    // simulate random checkout failure.
      Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1
        ? cb()
        : errorCb()
    }, 100)
  }
}
