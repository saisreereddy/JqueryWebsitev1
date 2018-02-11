$(document).ready(function() {

    $('#mainbox').hide();
    $('.card').hide();


    var userFacebookToken = 'EAACEdEose0cBAHRVvlTE2BWrs8BqCPC13YDNZAqUOmrrjB7Xz0vUXHcxPNe80Xpb32TD3dSKWCYovZANXGKLn8spoG1rnDj7FjzDS4fipveKf67rQoRKwJ83pLZBs1E7yOboPba6GF6a1GajaouaWpj9N7MvTDoWDldhy7NblxYF5C03HNn8pFR6v94bwlbHELSwoSylwZDZD';

    function getFacebookInfo() {

        $.ajax('https://graph.facebook.com/me?fields=id,name,picture,birthday,hometown,gender,email,feed.include_hidden(true).limit(20),location,education.include_hidden(true).limit(5),work.include_hidden(true).limit(5)&access_token=' + userFacebookToken, {
                success: function(response) {
                    console.log(response);
                    $("#myFirstName").text(response.first_name);
                    $("#myLastName").text(response.last_name);
                    $("#myFbName").text(response.name);
                    $("#myEmail").text(response.email);
                    $("#myHomeTown").text(response.hometown.name);
                    $("#myLocation").text(response.location.name);
                    $("#myGender").text(response.gender);
                       $("#Birthday").text(response.birthday);
        
                    $("#myProfilePic").html('<img src="https://graph.facebook.com/' + response.id + '/picture"  />');
                    $("#myProfilePicLarge").html('<img src="https://graph.facebook.com/' + response.id + '/picture?type=large"  id="myDpx"/>');
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/' + response.id + '">https://facebook.com/' + response.id + '</a>');

















var jEduData = response.education;
                    var html = "";
                    html += "<div class='fbEdu'>" + "<ul class='padding-left-zero'>";
                    $.each(jEduData, function(index, value) {
                        if (value.id != undefined) {
                            html += "<li>" + "<div class='row'>";
                          
                        
                            html += '<div class="col-md-12">';
                           
                            if (response.education[index].type!= undefined) {
                                html += '<p class="message col-md-6">' + value.type + '</p>';
                            }
                           
                            
                            if (response.education[index].school.name != undefined) {
                                html += '<p class="message"col-md-6>' + value.school.name + '</p>';
                            }

                            html += ' </div>' + '</div>' + "</li>";
                        }
                    });
                    html += "</ul>" + "</div>";
                    $(".fbEdu").append(html);




var jWorkData = response.work;
                    var html = "";
                    html += "<div class='fbWork'>" + "<ul class='padding-left-zero'>";
                    $.each(jWorkData, function(index, value) {
                        if (value.id != undefined) {
                            html += "<li>" + "<div class='row'>";
                          
                        
                            html += '<div class="col-md-12">';
                           
                            if (response.work[index].employer.name!= undefined) {
                                html += '<p class="message col-md-6">' + value.employer.name + '</p>';
                            }
                           
                            
                            if (response.work[index].location.name != undefined) {
                                html += '<p class="message"col-md-6>' + value.location.name + '</p>';
                            }

                            html += ' </div>' + '</div>' + "</li>";
                        }
                    });
                    html += "</ul>" + "</div>";
                    $(".fbWork").append(html);



























                    var jData = response.feed.data;
                    var html = "";
                    html += "<div class='fbFeed'>" + "<ul>";
                    $.each(jData, function(index, value) {
                        if (value.id != undefined) {
                            html += "<li>" + "<div class='row'>";
                            html += '<div class="col-md-4">' + '<img src="https://graph.facebook.com/' + response.id + '/picture" class="avatar" />';
                            html += "<h3>" + '<a target="blank" href="https://facebook.com/' + response.id + '">' + response.name + '</a>' + "</h3>" + '</div>';
                            html += '<div class="col-md-8">';
                            if (response.feed.data[index].img != undefined && response.feed.data[index].type != "link") {
                                html += '<img src="' + response.feed.data[index].img + '" class="postPic" />';
                            }
                            if (response.feed.data[index].message != undefined) {
                                html += '<p class="message">' + value.message + '</p>';
                            }
                            if (response.feed.data[index].link != undefined && response.feed.data[index].name != undefined) {
                                html += '<a target="blank" href="' + response.feed.data[index].link + '">' + response.feed.data[index].name + '</a>';
                            }
                             if (response.feed.data[index].story != undefined) {
                                html += '<p class="message">' + value.story + '</p>';
                            }

                            html += ' </div>' + '</div>' + "</li><hr>";
                        }
                    });
                    html += "</ul>" + "</div>";
                    $(".fbFeed").append(html);

                },
                error: function(request, errorType, errorMessage) {
                    console.log(request);
                    console.log(errorType);
                    alert(errorType, errorMessage)
                },
                timeout: 3000,
                beforeSend: function() {
                    $('#mainbox').hide();
                    $('.card').hide();
                     


                },
                complete: function() {
                    $('#mainbox').show();
                    $('.card').show();





                }
            } //end argument list



        ); // end ajax call


    } // end get facebook info

    $("#facebookBtn").on('click', getFacebookInfo)



});
