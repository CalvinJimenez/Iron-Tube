class VideosController < ApplicationController
    def index
        videos = Video.all
        render json: videos
      end

        def show 
            video_found = Video.find_by(id: params[:id])
            render json: video_found
        end
end
