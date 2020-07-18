$(() => {
   
  
    $(".create-form").on("submit", (event) => {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newburger = {
        burger_name: $("#burgers").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newburger,
      }).then(() => {
        // Reload the page to get the updated list
        location.reload();
      });
    });
  
    $(".delete-burger").on("click", function () {
      const id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax(`/api/burgers/${id}`, {
        type: "DELETE",
      }).then(() => {
        // Reload the page to get the updated list
        location.reload();
      });
    });
  });
  