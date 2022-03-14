export interface ICardState {
  forceUpdate: object;
}

export enum CardActions {
  UPDATE_PRODUCT = "UPDATE_PRODUCT",
  DELETE_PRODUCT = "DELETE_PRODUCT",
  ADD_PRODUCT = "ADD_PRODUCT",
}

interface ICardAction {
  type: CardActions.DELETE_PRODUCT | CardActions.UPDATE_PRODUCT | CardActions.ADD_PRODUCT;
}

export type CardAction = ICardAction;
