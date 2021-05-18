class EventosController < ApplicationController
  before_action :set_evento, except: [:index, :create]

  # GET /eventos
  def index
    @eventos = Evento.all

    render json: @eventos, status: :accepted
  end

  # GET /eventos/1
  def show
    render json: @evento, status: :accepted
  end

  # POST /eventos
  def create
    @evento = Evento.new(evento_params)

    if @evento.save
      render json: @evento, status: :created
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
      params.require(:evento).permit(:name, :date, :location, :picture, :description, :category)
    end
end
