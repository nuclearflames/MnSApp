class HomeController < ApplicationController
	def index

	end

	def getData

		url = 'http://goserver.cloudapp.net:3000/api/spaceprobe/getdata/1993jamesgrant@gmail.com'
		resp = Net::HTTP.get_response(URI.parse(url))
		render :json => resp.body

	end
end
