package oblig2.webprogrammering;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class HomeController {

    public final List<Billetter> alleBilletter = new ArrayList<>();

    @PostMapping("/lagre")
    public void hei(Billetter innBillett){
        alleBilletter.add(innBillett);
    }

    @GetMapping("/hentAlle")
    public List<Billetter> hentAlle(){
        return alleBilletter;
    }

    @GetMapping("/slettAlle")
    public void slettAlle() {
        alleBilletter.clear();
    }

}
