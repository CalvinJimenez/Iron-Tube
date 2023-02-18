class SessionsController < ApplicationController
    
    def create

        user_to_find_to_login = User.find_by( username: params[:username] )

        if user_to_find_to_login  #Now We Want to Verify their Password

            if user_to_find_to_login.authenticate( params[:password] )

                session[:user_id] = user_to_find_to_login.id

                render json: user_to_find_to_login

            else 

                render json: { error: "** Check Your Password **" }

            end


        else

            render json: { error: "Username OR Password Don't Match" }
            # render json: { error: "No Username Matches / Username Doesn't Exists" }

        end

    end

    def destroy
    # def logout

        session.delete( :user_id )

        render json: {}

    end

    def get_logged_in_user
        # byebug
      user_already_logged_in = User.find_by( id: session[:user_id] )

      render json: user_already_logged_in

    end

end



























# def create
#     # byebug

#     user_to_find_to_login = User.find_by(username: params[:username])

#     if user_to_find_to_login

#         if user_to_find_to_login.authenticate(params[:password])
#             render json: user_to_find_to_login
#         else
#             render json: {error: "**Check Your Password**"}
#         end
#     else 
#         render json: {error: "Username OR Password Don't Match"}
#     end
# end
