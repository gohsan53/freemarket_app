class ItemsController < ApplicationController
  def new
    @item = Item.new
    @item.images.new
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      redirect_to root_path
    else
      render :new
    end

  private

  def item_params
    params.require(:item).permit(:name, :price, :condition, :explanation, images_attributes: [:src]).merge(user_id: current_user.id)
  end
end
