class UsersController < ApplicationController
    
  ## Rescues

      rescue_from ActiveRecord::RecordNotFound, with: :user_not_found
      rescue_from ActiveRecord::RecordInvalid, with: :user_unable_to_create

  ## Rescues

  ## before_actions

      before_action :user_find_method,   except: [:index, :create]

  ## before_actions

  # GET to /users  ==  C[R]UD : READ
  def index

      render json: User.all

  end

  # GET to /users/:id  ==  C[R]UD : READ
  def show

      if user_find_method

          render json: user_find_method

      else 

          user_not_found

      end

  end

  # POST to /users  ==  [C]RUD : CREATE
  def create

      new_user = User.new( user_create_params )


          if new_user.save # !! Has .valid? Built Into It

              render json: new_user

          else

              render json: { errors: new_user.errors.full_messages }

          end

  end

  # PATCH to /user/:id  ==  CR[U]D : UPDATE
  def update

          # user_find = User.find_by( id: params[:id] )

      if user_find_method  # Did We Find the User?

          if  user_find_method.update( user_update_params )
            user_find_method.update( username: params[:newUserName])

                # byebug

              render json: user_find_method


          else  ## They (the User) ARE NO LONGER VALID  :(

              render json: { errors: user_find_method.errors.full_messages }

          end

      else

          user_not_found

      end
      
  end

  # DELETE to /user/:id  ==  CRU[D] : DESTROY/DELETE
  def destroy

      if user_find_method

              destroy_response = user_find_method

          user_find_method.destroy

          render json: destroy_response.id
 
      else

          user_not_found

      end

  end

  #### UsersController - Custom Controller Actions

      # def my_wooblies

      #     logged_in_user = User.find_by( id: session[:user_id] )

      #     render json: logged_in_user.wooblies

      # end

  private  

  # Strong Params

      def user_create_params

          params.permit(:name, :username, :email, :password)

      end

      def user_update_params

          params.permit(:name, :username, :email, :password, :pfp)

      end

  # Strong Params

  # Private Controller Methods

      def user_find_method

          user_to_find = User.find_by( id: params[:id] )

      end

      # Issue Finding a User
      def user_not_found
          render json: { error: "User Not Found" }

      end

      # Issue Creating a User
      def user_unable_to_create( the_invalid_user_exception ) 

          render json: { errors: the_invalid_user_exception.record.errors.full_messages }

      end
end