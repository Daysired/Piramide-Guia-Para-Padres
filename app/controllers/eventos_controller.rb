class EventosController < ApplicationController
  before_action :set_evento, only: [:show, :update, :destroy]

  # GET /eventos
  def index
    @eventos = Evento.all

    render json: @eventos
  end

  # GET /eventos/1
  def show
    render json: @evento
  end

  # POST /eventos
  def create
    @evento = Evento.new(evento_params)

    if @evento.save
      render json: @evento, status: :created, location: @evento
    else
      render json: @evento.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /eventos/1
  def update
    if @evento.update(evento_params)
      render json: @evento
    else
      render json: @evento.errors, status: :unprocessable_entity
    end
  end

  # DELETE /eventos/1
  def destroy
    @evento.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_evento
      @evento = Evento.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def evento_params
      params.require(:evento).permit(:name, :date, :location, :picture, :description)
    end
end
