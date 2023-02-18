class LikesController < ApplicationController
  def index

    likes = Like.all

    render json: likes

  end

  def show

    like_found = Like.find_by(id: params[:id])

    render json: like_found

  end

  def create

    logged_in_user = User.find_by( id: session[:user_id] )

    if logged_in_user

      user_likes = Like.where( user_id: logged_in_user.id )

      if user_likes.map{ |like| like.video_id }.include?( params[:video_id] )
        #if someone liked this already

       like_to_destroy = user_likes.find_by( video_id: params[:video_id] )

       like_to_destroy.destroy

       video_to_dec = Video.find_by_id( params[:video_id] )

       video_to_dec.update(like_number: video_to_dec.like_number-1 )

        render json: video_to_dec

      else 

        #POST/CREATE
      


        new_like = logged_in_user.likes.build( like_create_params )
  
        if new_like.save # !! Has .valid? Built Into It
          
          video_to_inc = Video.find_by_id( params[:video_id] )

       video_to_inc.update(like_number: video_to_inc.like_number+1 )

        render json: video_to_inc
    
        else
    
          # byebug
  
          render json: { errors: new_like.errors.full_messages }
    
        end






      end


    else
      
      render json: {error: "No User Found"}

    end


  
  end

  private

  def like_create_params
    params.permit(:video_id, :user_id)
  end

end
