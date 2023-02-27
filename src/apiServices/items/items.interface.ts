export interface DataStructure {
  categories: string[];
  items: Item[];
  totalPages: number;
}

export interface Item {
  author: {
    nickname?: string | null;
  };
  item: {
    id: string;
    title: string;
    price: {
      currency: string;
      amount: number;
      decimals: number;
    };
    picture: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity?: number;
    description?: string;
    sellerState?: string;
  };
}

export interface ApiItem {
  status: string;
  value: ItemData;
}

export interface ItemData {
  id: string;
  title: string;
  condition: string;
  thumbnail_id: string;
  catalog_product_id: null;
  listing_type_id: string;
  permalink: string;
  buying_mode: string;
  site_id: string;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: string;
  order_backend: number;
  price: number;
  original_price: null;
  sale_price: null;
  sold_quantity: number;
  available_quantity: number;
  official_store_id: null;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  tags: string[];
  variation_filters: string[];
  shipping: Shipping;
  stop_time: string;
  seller: Seller;
  seller_address: SellerAddress;
  address: Address;
  attributes: Attribute[];
  variations_data: { [key: string]: VariationsDatum };
  installments: Installments;
  winner_item_id: null;
  discounts: null;
  promotions: any[];
  inventory_id: null;
}

export interface Address {
  state_id: string;
  state_name: string;
  city_id: string;
  city_name: string;
}

export interface Attribute {
  id: string;
  name: string;
  value_id: null | string;
  value_name: string;
  attribute_group_id: string;
  attribute_group_name: string;
  value_struct: null;
  values: Value[];
  source: number;
  value_type: string;
}

export interface Value {
  id: null | string;
  name: string;
  struct: null;
  source: number;
}

export interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
}

export interface Seller {
  id: number;
  nickname: string;
  car_dealer: boolean;
  real_estate_agency: boolean;
  _: boolean;
  registration_date: string;
  tags: string[];
  car_dealer_logo: string;
  permalink: string;
  seller_reputation: SellerReputation;
}

export interface SellerReputation {
  level_id: string;
  power_seller_status: string;
  transactions: Transactions;
  metrics: Metrics;
}

export interface Metrics {
  sales: Sales;
  claims: Cancellations;
  delayed_handling_time: Cancellations;
  cancellations: Cancellations;
}

export interface Cancellations {
  period: string;
  rate: number;
  value: number;
}

export interface Sales {
  period: string;
  completed: number;
}

export interface Transactions {
  canceled: number;
  completed: number;
  period: string;
  ratings: Ratings;
  total: number;
}

export interface Ratings {
  negative: number;
  neutral: number;
  positive: number;
}

export interface SellerAddress {
  comment: string;
  address_line: string;
  zip_code: string;
  id: null;
  latitude: null;
  longitude: null;
  country: City;
  state: City;
  city: City;
}

export interface City {
  id: string;
  name: string;
}

export interface Shipping {
  logistic_type: string;
  mode: string;
  store_pick_up: boolean;
  free_shipping: boolean;
  tags: any[];
  promise: null;
}

export interface VariationsDatum {
  thumbnail: string;
  ratio: string;
  name: string;
  pictures_qty: number;
}

export interface Filters {
  id: string;
  name: string;
  type: string;
  values: Value[];
}

export interface Value {
  id: string | null;
  name: string;
  path_from_root: PathFromRoot[];
}

export interface PathFromRoot {
  id: string;
  name: string;
}

export interface ItemDescription {
  status: string;
  value: DescriptionData;
}

export interface DescriptionData {
  text: string;
  plain_text: string;
  last_updated: string;
  date_created: string;
  snapshot: Snapshot;
}

export interface Snapshot {
  url: string;
  width: number;
  height: number;
  status: string;
}

export interface ItemAPI {
  id: string;
  site_id: string;
  title: string;
  subtitle: null;
  seller_id: number;
  category_id: string;
  official_store_id: null;
  price: number;
  base_price: number;
  original_price: number;
  currency_id: string;
  initial_quantity: number;
  available_quantity: number;
  sold_quantity: number;
  sale_terms: SaleTerm[];
  buying_mode: string;
  listing_type_id: string;
  start_time: string;
  stop_time: string;
  condition: string;
  permalink: string;
  thumbnail_id: string;
  thumbnail: string;
  secure_thumbnail: string;
  pictures: Picture[];
  video_id: string;
  descriptions: any[];
  accepts_mercadopago: boolean;
  non_mercado_pago_payment_methods: any[];
  shipping: Shipping;
  international_delivery_mode: string;
  seller_address: SellerAddress;
  seller_contact: null;
  location: Location;
  coverage_areas: any[];
  attributes: Attribute[];
  warnings: any[];
  listing_source: string;
  variations: Variation[];
  status: string;
  sub_status: any[];
  tags: string[];
  warranty: string;
  catalog_product_id: null;
  domain_id: string;
  parent_item_id: null;
  differential_pricing: null;
  deal_ids: string[];
  automatic_relist: boolean;
  date_created: string;
  last_updated: string;
  health: number;
  catalog_listing: boolean;
  channels: string[];
}

export interface Attribute {
  id: string;
  name: string;
  value_id: null | string;
  value_name: string;
  value_struct: null;
  values: Value[];
  attribute_group_id?: AttributeGroupID;
  attribute_group_name?: AttributeGroupName;
  value_type: ValueType;
}

export enum AttributeGroupID {
  Others = "OTHERS",
}

export enum AttributeGroupName {
  Otros = "Otros",
}

export enum ValueType {
  GridID = "grid_id",
  List = "list",
  String = "string",
}

export interface Value {
  id: null | string;
  name: string;
  struct: Struct | null;
}

export interface Struct {
  number: number;
  unit: string;
}

export interface Location {}

export interface Picture {
  id: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality: string;
}

export interface SaleTerm {
  id: string;
  name: string;
  value_id: null | string;
  value_name: string;
  value_struct: Struct | null;
  values: Value[];
  value_type: string;
}

export interface SellerAddress {
  city: City;
  state: City;
  country: City;
  search_location: SearchLocation;
  id: number;
}

export interface City {
  id: string;
  name: string;
}

export interface SearchLocation {
  neighborhood: City;
  city: City;
  state: City;
}

export interface Shipping {
  mode: string;
  methods: any[];
  tags: string[];
  dimensions: null;
  local_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  store_pick_up: boolean;
}

export interface Variation {
  id: number;
  price: number;
  attribute_combinations: Attribute[];
  available_quantity: number;
  sold_quantity: number;
  sale_terms: any[];
  picture_ids: string[];
  catalog_product_id: null;
}
